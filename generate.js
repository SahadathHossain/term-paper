const { Document, Packer } = require('docx');
const { titlePage, tableOfContents, abstractSection, introductionSection } = require('./sections');
const fs = require('fs');
const path = require('path');

async function generateDocument() {
  const doc = new Document({
    sections: [
      {
        children: [
          ...titlePage,
          ...tableOfContents,
          ...abstractSection,
          ...introductionSection,
        ],
      },
    ],
  });

  try {
    const buffer = await Packer.toBuffer(doc);
    const outputPath = path.join(__dirname, 'Digital_Transformation_HRM_Bangladesh.docx');
    fs.writeFileSync(outputPath, buffer);
    console.log(`✅ Document generated successfully: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error generating document:', error);
  }
}

generateDocument();
