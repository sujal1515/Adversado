const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const s3_start = code.indexOf('{/* Section 3: Excellence */}');
const s4_start = code.indexOf('{/* Section 4: Empty state for background animation */}');
const end_div = code.indexOf('</div>', s4_start + 100) > 0 ? code.indexOf('</div>', code.indexOf('</section>', s4_start)) : -1;

if (s3_start !== -1 && s4_start !== -1) {
  const section3_content = code.substring(s3_start, s4_start);
  const section4_content = code.substring(s4_start, code.indexOf('      </div>', s4_start));
  
  console.log("Found S3:", section3_content.length);
  console.log("Found S4:", section4_content.length);
}
