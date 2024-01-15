const downloadButton1 = document.getElementById("downloadButton1");

const fileURL = "/MTS 101/2021-2022-MTS-101-FURTHER-NOTE1.pdf";

downloadButton1.addEventListener("click", function () {
  const downloadLink = document.createElement("a");
  downloadLink.style.display = "none";
  downloadLink.href = fileURL;
  downloadLink.download =
    "/MTS 101/2021-2022-MTS-101-FURTHER-NOTE1.pdf";

  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
});

// 2
// 2
// 2
const downloadButton2 = document.getElementById("downloadButton2");

const fileURL1 = "/MTS 101/2021-2022-MTS-101-FURTHER-NOTE2.pdf";

downloadButton2.addEventListener("click", function () {
  const downloadLink = document.createElement("a");
  downloadLink.style.display = "none";
  downloadLink.href = fileURL1;
  downloadLink.download =
    "/MTS 101/2021-2022-MTS-101-FURTHER-NOTE2.pdf";

  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
});

// 3
// 3
// 3

const downloadButton3 = document.getElementById("downloadButton3");

const fileURL2 = "/MTS 101/2021-2022-MTS-101-FURTHER-NOTE3.pdf";

downloadButton3.addEventListener("click", function () {
  const downloadLink = document.createElement("a");
  downloadLink.style.display = "none";
  downloadLink.href = fileURL2;
  downloadLink.download =
    "/MTS 101/2021-2022-MTS-101-FURTHER-NOTE3.pdf";

  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
});

// 4
// 4
// 4
const downloadButton4 = document.getElementById("downloadButton4");

const fileURL3 =
  "/MTS 101/2021-2022-MTS-101-VIRTUAL-LECTURE-NOTE (1).pdf";

downloadButton4.addEventListener("click", function () {
  const downloadLink = document.createElement("a");
  downloadLink.style.display = "none";
  downloadLink.href = fileURL3;
  downloadLink.download =
    "/MTS 101/2021-2022-MTS-101-VIRTUAL-LECTURE-NOTE (1).pdf";

  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
});

// 5
// 5
// 5
const downloadButton5 = document.getElementById("downloadButton5");

const fileURL4 =
  "/MTS 101/2021-2022-MTS-101-VIRTUAL-LECTURE-NOTE.pdf";

downloadButton5.addEventListener("click", function () {
  const downloadLink = document.createElement("a");
  downloadLink.style.display = "none";
  downloadLink.href = fileURL4;
  downloadLink.download =
    "/MTS 101/2021-2022-MTS-101-VIRTUAL-LECTURE-NOTE.pdf";

  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
});

// 6
// 6
// 6.....

function downloadFiles1() {
  const fileUrls1 = [
    "/MTS 101/SET THEORY 1 IMPACT SIMPLIFIED.pdf",
    "/MTS 101/SETS.pdf",
    "/MTS 101/Pure Mathematics for Advanced Level ( PDFDrive ).pdf",
  ];

  fileUrls1.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

// Event listener for the download button
const downloadButton6 = document.getElementById("downloadButton6");
downloadButton6.addEventListener("click", downloadFiles1);

// 7
// 7
// 7
const downloadButton7 = document.getElementById("downloadButton7");

const fileURL5 = "/MTS 101/indices, logarithm and surd p.d.f.pdf";

downloadButton7.addEventListener("click", function () {
  const downloadLink = document.createElement("a");
  downloadLink.style.display = "none";
  downloadLink.href = fileURL5;
  downloadLink.download =
    "/MTS 101/indices, logarithm and surd p.d.f.pdf";

  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
});

// 8
// 8
// 8
// 8
const downloadButton8 = document.getElementById("downloadButton8");

const fileURL6 = "/MTS 101/MTS101_Complex_Number (1).pdf";

downloadButton8.addEventListener("click", function () {
  const downloadLink = document.createElement("a");
  downloadLink.style.display = "none";
  downloadLink.href = fileURL6;
  downloadLink.download =
    "/MTS 101/MTS101_Complex_Number (1).pdf";

  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
});

// 9
// 9
// 9
const downloadButton9 = document.getElementById("downloadButton9");

const fileURL7 = "/MTS 101/5 polynomial.pdf";

downloadButton9.addEventListener("click", function () {
  const downloadLink = document.createElement("a");
  downloadLink.style.display = "none";
  downloadLink.href = fileURL7;
  downloadLink.download = "/MTS 101/5 polynomial.pdf";

  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
});
// 10
// 10
// 10

function downloadFiles2() {
  const fileUrls2 = [
    "/MTS 101/475_MTS101.pdf",
    "/MTS 101/Higher Engineering Mathematics ( PDFDrive.com ).pdf",
    "/MTS 101/MTS 101 manual.pdf",
    "/MTS 101/MTS 101.pdf",
    "/MTS 101/~$MTS 101 PART 4(MODULE 1).pptx",
    "/MTS 101/~$MTS 101 PART 4(MODULE 2).pptx",
    "/MTS 101/Mts 101 part 4(module 3).pptx",
    "/MTS 101/MTS101lecturenote.pdf",
    "/MTS 101/MTS 101 PART 4(MODULE 1).pptx",
    "/MTS 101/MTS 101 PART 4(MODULE 2).pptx",
    "/MTS 101/MTS101 Lecture.pdf",
  ];

  fileUrls2.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

// Event listener for the download button
const downloadButton10 = document.getElementById("downloadButton10");
downloadButton10.addEventListener("click", downloadFiles2);

//   11
//   11
//   11
function downloadFiles3() {
  const fileUrls3 = [
    "/MTS 101/MTS 101 ALGEBRA- FUNAAB TEMPLATE.pdf",
    "/MTS 101/PROF AGBOOLA ALGEBRA.pdf",
    "/MTS 101/MATRICES.docx",
  ];

  fileUrls3.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton11 = document.getElementById("downloadButton11");
downloadButton11.addEventListener("click", downloadFiles3);

//   12
//   12
//   12
//   12
function downloadFiles4() {
  const fileUrls4 = [
    "/MTS 101/CHECKUP ASS IMPACT SIMPLIFIED.pdf",
    "/MTS 101/MTS 101 Past Questions-1.pdf",
    "/MTS 101/MTS 101 SELF CHECK UP PROBLEM.pdf",
    "/MTS 101/MTS101_practics_problem_2.pdf",
    "/MTS 101/MTS101 TUT QUES IMPACT SIMPLIFIED.pdf",
    "/MTS 101/RIGOROUS ASSIGNMENT IMPACT SIMPLIFIED.pdf",
  ];

  fileUrls4.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton12 = document.getElementById("downloadButton12");
downloadButton12.addEventListener("click", downloadFiles4);

// MTS102
// MTS102
// MTS102
function downloadFiles5() {
  const fileUrls5 = [
    "/102/MTS 102.pdf",
    "/102/2021-MTS-106-VIRTUAL-LECTURE-NOTE.pdf",
  ];

  fileUrls5.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton13 = document.getElementById("downloadButton13");
downloadButton13.addEventListener("click", downloadFiles5);
//
function downloadFiles6() {
  const fileUrls6 = [
    "/102/CamScanner 09-27-2023 09.26.pdf",
    "/102/IMPACT SIMPLIFIED.pdf",
  ];

  fileUrls6.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton14 = document.getElementById("downloadButton14");
downloadButton14.addEventListener("click", downloadFiles6);
//
function downloadFiles7() {
  const fileUrls7 = [
    "/102/MTS 102 Trigonometry .pdf",
    "/102/MTS102_TRIG.pdf",
  ];

  fileUrls7.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton15 = document.getElementById("downloadButton15");
downloadButton15.addEventListener("click", downloadFiles7);
//
function downloadFiles8() {
  const fileUrls8 = [
    "/102/max_min of a function.pdf",
    "/102/mts 102 module 5.pdf",
  ];

  fileUrls8.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton16 = document.getElementById("downloadButton16");
downloadButton16.addEventListener("click", downloadFiles8);
//
function downloadFiles9() {
  const fileUrls9 = [
    "/102/MTS 102 100l Agboola CAT.pdf",
    "/102/MTS 102 past question COMP-1.pdf",
    "/102/MTS Solution JOSH.pdf",
  ];

  fileUrls9.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton17 = document.getElementById("downloadButton17");
downloadButton17.addEventListener("click", downloadFiles9);
// MTS 103
// MTS 103
// MTS 103
function downloadFiles10() {
  const fileUrls10 = [
    "/MTS 103/Module 1/Coordinate Geometry of a Straight Line.pdf",
    "/MTS 103/Module 1/Vector Geometry Note.pdf",
  ];

  fileUrls10.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton18 = document.getElementById("downloadButton18");
downloadButton18.addEventListener("click", downloadFiles10);
//
function downloadFiles11() {
  const fileUrls11 = [
    "/MTS 103/Module 2/Conic Section NOTE.pdf",
    "/MTS 103/Module 2/Conic Section Video 1 - Circle and Parabola.mp4",
    "/MTS 103/Module 2/Conic Section Video 2 - Ellipse and Parabola.mp4",
  ];

  fileUrls11.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton19 = document.getElementById("downloadButton19");
downloadButton19.addEventListener("click", downloadFiles11);
//
function downloadFiles12() {
  const fileUrls12 = [
    "/MTS 103/103 MAJOR.pdf",
    "/MTS 103/DR. O J.docx",
    "/MTS 103/DR. OGUNSOLA.pdf",
  ];

  fileUrls12.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton20 = document.getElementById("downloadButton20");
downloadButton20.addEventListener("click", downloadFiles12);
//
function downloadFiles13() {
  const fileUrls13 = [
    "/MTS 103/MTS 103 MODULEI.pdf",
    "/MTS 103/MTS103! MODULE II.pdf",
    "/MTS 103/PARABOLA IMPACT SIMPLIFIED.pdf",
    "/MTS 103/Vector Product.pdf",
  ];

  fileUrls13.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton21 = document.getElementById("downloadButton21");
downloadButton21.addEventListener("click", downloadFiles13);
//
function downloadFiles14() {
  const fileUrls14 = [
    "/MTS 103/MTS 103 RECORD 5.mp4",
    "/MTS 103/MTS 103 RECORD 6.mp4",
    "/MTS 103/MTS 103 RECORD 7.mp4",
    "/MTS 103/MTS 103 RECORD 8.mp4",
    "/MTS 103/MTS 103 RECORD 9.mp4",
  ];

  fileUrls14.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton22 = document.getElementById("downloadButton22");
downloadButton22.addEventListener("click", downloadFiles14);

//   MTS104
//   MTS104
function downloadFiles15() {
  const fileUrls15 = [
    "/104/MTS 104 - Merged (Final) (1).pdf",
    "/104/MTS 104 2223 NotesPDF (1).pdf",
    "/104/MTS 104 MODULE I.pdf",
  ];

  fileUrls15.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton23 = document.getElementById("downloadButton23");
downloadButton23.addEventListener("click", downloadFiles15);
//   MTS104
function downloadFiles16() {
  const fileUrls16 = [
    "/104/mts104_shm.pdf",
    "/104/mts104_shm_cont.pdf",
  ];

  fileUrls16.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton24 = document.getElementById("downloadButton24");
downloadButton24.addEventListener("click", downloadFiles16);
//   MTS104
function downloadFiles17() {
  const fileUrls17 = [
    "/104/mts104_projectile.pdf",
    "/104/mts104_motion.pdf",
    "/104/mts104_linear_momentum.pdf",
    "/104/MTS104 Moment Of A Force-2.pdf",
  ];

  fileUrls17.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton25 = document.getElementById("downloadButton25");
downloadButton25.addEventListener("click", downloadFiles17);
//   MTS104
function downloadFiles18() {
  const fileUrls18 = [
    "/104/MTS 104 PAST QUESTION..pdf",
    "/104/MTS 104 past questions .pdf",
    "/104/MTS 104 past questions .pdf",
    "/104/MTS 104 QUIZ 150721.docx",
  ];

  fileUrls18.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton26 = document.getElementById("downloadButton26");
downloadButton26.addEventListener("click", downloadFiles18);
// STS181
// STS181
function downloadFiles19() {
  const fileUrls19 = [
    "/sts 181/SETS.pdf",
    "/sts 181/Schaums Outlines of Probability and Statistics PDFDrive 2.pdf",
  ];

  fileUrls19.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton27 = document.getElementById("downloadButton27");
downloadButton27.addEventListener("click", downloadFiles19);
// STS181
function downloadFiles20() {
  const fileUrls20 = [
    "/sts 181/STS 181 Part 1.pptx",
    "/sts 181/STS 181 Part 2.pptx",
    "/sts 181/STS 181 Part 3.pptx",
  ];

  fileUrls20.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton28 = document.getElementById("downloadButton28");
downloadButton28.addEventListener("click", downloadFiles20);
// sts112
// sts112
function downloadFiles21() {
  const fileUrls21 = [
    "/112/IMG-20231006-WA0070.jpg",
    "/112/IMG-20231006-WA0071.jpg",
    "/112/IMG-20231006-WA0072.jpg",
  ];

  fileUrls21.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton29 = document.getElementById("downloadButton29");
downloadButton29.addEventListener("click", downloadFiles21);
// sts112
function downloadFiles22() {
  const fileUrls22 = [
    "/112/IMG-20231015-WA0020.jpg",
    "/112/IMG-20231015-WA0022.jpg",
    "/112/IMG-20231015-WA0023.jpg",
    "/112/IMG-20231015-WA0024.jpg",
    "/112/IMG-20231015-WA0025.jpg",
    "/112/IMG-20231015-WA0026.jpg",
    "/112/IMG-20231015-WA0027.jpg",
    "/112/IMG-20231015-WA0028.jpg",
    "/112/IMG-20231015-WA0029.jpg",
    "/112/IMG-20231015-WA0030.jpg",
    "/112/IMG-20231015-WA0031.jpg",
  ];

  fileUrls22.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton30 = document.getElementById("downloadButton30");
downloadButton30.addEventListener("click", downloadFiles22);
// sts112
function downloadFiles23() {
  const fileUrls23 = [
    "/112/stat_tables-1.pdf",
    "/112/",
  ];

  fileUrls23.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton31 = document.getElementById("downloadButton31");
downloadButton31.addEventListener("click", downloadFiles23);
// sts112
function downloadFiles24() {
  const fileUrls24 = [
    "/112/STS 112 (1).pdf",
    "/112/STS 112 2nd Original.pdf",
    "/112/STS 112.pdf",
    "/112/STS 122 SCANNED NOTE-1.pdf",
  ];

  fileUrls24.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton32 = document.getElementById("downloadButton32");
downloadButton32.addEventListener("click", downloadFiles24);
// sts112
function downloadFiles25() {
  const fileUrls25 = ["/sts 181/112/STS 112 Hypothesis testing .pdf"];

  fileUrls25.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton33 = document.getElementById("downloadButton33");
downloadButton33.addEventListener("click", downloadFiles25);
// sts112
function downloadFiles26() {
  const fileUrls26 = [
    "/112/STS 112 Hypothesis testing .pdf",
    "/112/Sts 112 Expectation and variance.pdf",
    "/112/sts 112 Goodness of fit.pdf",
  ];

  fileUrls26.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton34 = document.getElementById("downloadButton34");
downloadButton34.addEventListener("click", downloadFiles26);
// sts112
function downloadFiles27() {
  const fileUrls27 = [
    "/112/STS 112 PAST QUESTION.pdf",
    "/112/STS 112- video 1.pptx",
    "/112/STS 112- video 1 (1).pdf",
  ];

  fileUrls27.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton35 = document.getElementById("downloadButton35");
downloadButton35.addEventListener("click", downloadFiles27);
// bio101
// bio101
function downloadFiles28() {
  const fileUrls28 = [
    "/BIO 101/Bio 101 (1).pdf",
    "/BIO 101/BIO 101  module 1. SUNNYWISE.pptx",
    "/BIO 101/BIO 101 module 2. SUNNYWISE.pptx",
    "/BIO 101/BIO 101 FUNAAB Powepoint module 1.pptx",
    "/BIO 101/Bio 101-1.pdf",
    "/BIO 101/BIO 101.Introductory Biology 1-1.pdf",
    "/BIO 101/BIO 101.Introductory Biology 1.pdf",
  ];

  fileUrls28.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton36 = document.getElementById("downloadButton36");
downloadButton36.addEventListener("click", downloadFiles28);
// bio101
function downloadFiles29() {
  const fileUrls29 = [
    "/BIO 101/Bio 101 part a_103155.pdf",
    "/BIO 101/Bio 101 part B_103111.pdf",
    "/BIO 101/BIO 101 PDF NOTES.pdf",
    "/BIO 101/BIO 101 PPP NOTE 2.pptx",
    "/BIO 101/PLANT CELL_A 05022021.pdf",
  ];

  fileUrls29.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton37 = document.getElementById("downloadButton37");
downloadButton37.addEventListener("click", downloadFiles29);
// bio101
function downloadFiles30() {
  const fileUrls30 = [
    "/BIO 101/BIO 101 Past Questions.pdf",
    "/BIO 101/Freshers Meal-compressed-1.pdf",
  ];

  fileUrls30.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton38 = document.getElementById("downloadButton38");
downloadButton38.addEventListener("click", downloadFiles30);

// BIO102
// BIO102
// BIO102
function downloadFiles31() {
  const fileUrls31 = [
    "/BIO 101/102/BIO 102 - Annelida.pdf",
    "/BIO 101/102/BIO 102 - Annelida-1.pdf",
  ];

  fileUrls31.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton39 = document.getElementById("downloadButton39");
downloadButton39.addEventListener("click", downloadFiles31);
// BIO102
function downloadFiles32() {
  const fileUrls32 = [
    "/BIO 101/102/Bio 102 Merged Pdfs.pdf",
    "/BIO 101/102/Bio102 summary.pdf",
  ];

  fileUrls32.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton40 = document.getElementById("downloadButton40");
downloadButton40.addEventListener("click", downloadFiles32);
// BIO102
function downloadFiles33() {
  const fileUrls33 = [
 '/BIO 101/102/BIO 102 - Nomenclature.pdf',
 '/BIO 101/102/Bio 102 - Phylum Protozoa.pdf',
 '/BIO 101/102/Phylum Protozoa ( BIO 102).pdf',
 '/BIO 101/102/Nematode BIO102.pdf',
  ];

  fileUrls33.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton41 = document.getElementById("downloadButton41");
downloadButton41.addEventListener("click", downloadFiles33);
// BIO102
function downloadFiles34() {
  const fileUrls34 = [
'/BIO 101/102/238 BIO 102 Past Questions .pdf',
'/BIO 101/102/238 BIO 102 Past Questions .pdf',
'/BIO 101/102/',
  ];

  fileUrls34.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const downloadButton42 = document.getElementById("downloadButton42");
downloadButton42.addEventListener("click", downloadFiles34);
// PHS101
// PHS101