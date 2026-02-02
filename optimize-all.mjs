import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './public/images';

// Get all jpg files
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpg'));

console.log(`Optimizing ${files.length} images for web...`);

for (const file of files) {
    const filePath = path.join(inputDir, file);
    const tempPath = path.join(inputDir, `temp_${file}`);
    
    try {
        const stats = fs.statSync(filePath);
        const originalSizeMB = (stats.size / 1024 / 1024).toFixed(2);
        
        // Optimize based on current size
        let quality = 85;
        let maxWidth = 1920;
        
        if (stats.size > 20 * 1024 * 1024) { // > 20MB
            quality = 75;
            maxWidth = 1600;
        } else if (stats.size > 10 * 1024 * 1024) { // > 10MB
            quality = 80;
            maxWidth = 1800;
        }
        
        await sharp(filePath)
            .resize(maxWidth, null, {
                withoutEnlargement: true,
                fit: 'inside'
            })
            .jpeg({ 
                quality: quality, 
                progressive: true,
                mozjpeg: true 
            })
            .toFile(tempPath);
        
        const newStats = fs.statSync(tempPath);
        const newSizeMB = (newStats.size / 1024 / 1024).toFixed(2);
        const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);
        
        // Replace original with optimized
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        
        console.log(`✓ ${file}: ${originalSizeMB}MB -> ${newSizeMB}MB (${savings}% reduction)`);
    } catch (err) {
        console.error(`✗ Error processing ${file}:`, err.message);
        if (fs.existsSync(tempPath)) {
            fs.unlinkSync(tempPath);
        }
    }
}

console.log('\n✓ All images optimized!');
