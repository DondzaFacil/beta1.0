document.getElementById('generatePdf').addEventListener('click', async () => {
  // Get user input

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const contacto = document.getElementById('contacto').value;
  const morada = document.getElementById('morada').value;

  const habilidade1 = document.getElementById('habilidade1').value;
  const habilidade2 = document.getElementById('habilidade2').value;
  const habilidade3 = document.getElementById('habilidade3').value;


  const educacao1 = document.getElementById('educacao1').value;
  const educacao2 = document.getElementById('educacao2').value;
  const educacao3 = document.getElementById('educacao3').value;

  const lingua1 = document.getElementById('lingua1').value;
  const lingua2 = document.getElementById('lingua2').value;
  const lingua3 = document.getElementById('lingua3').value;
  

  // Populate the preview section


  document.getElementById('previewNome').textContent = nome;
  document.getElementById('previewEmail').textContent = email;
  document.getElementById('previewContacto').textContent = contacto;
  document.getElementById('previewMorada').textContent = morada;

  document.getElementById('previewHabilidade1').textContent = habilidade1;
  document.getElementById('previewHabilidade2').textContent = habilidade2;
  document.getElementById('previewHabilidade3').textContent = habilidade3;
 

  document.getElementById('previewEducacao1').textContent = educacao1;
  document.getElementById('previewEducacao2').textContent = educacao2;
  document.getElementById('previewEducacao3').textContent = educacao3;

  document.getElementById('previewLinguas1').textContent = lingua1;
  document.getElementById('previewLinguas2').textContent = lingua2;
  document.getElementById('previewLinguas3').textContent = lingua3;
  


  const pdfPreview = document.getElementById('pdfPreview');
  pdfPreview.style.display = 'block';

  // Use html2canvas to capture the preview
  const canvas = await html2canvas(pdfPreview, { scale: 2 });
  const imgData = canvas.toDataURL('image/png');

  // Generate the PDF with jsPDF
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = 190; // Width of A4 in mm
  const imgHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth, imgHeight);
  pdf.save('generated.pdf'); // Downloads the PDF
});
