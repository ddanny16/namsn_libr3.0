function downloadFiles1() {
    const fileUrls1 = [

  "/MTS211/MTS 211(ABSTRACT ALGEBRA)-1.pdf",
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
  const downloadButton1 = document.getElementById("downloadButton1");
  downloadButton1.addEventListener("click", downloadFiles1);
  
function downloadFiles2() {
    const fileUrls2 = [

  "/MTS211/DOC-20240318-WA0152",
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
  const downloadButton2 = document.getElementById("downloadButton2");
  downloadButton2.addEventListener("click", downloadFiles2);
  
function downloadFiles3() {
    const fileUrls3 = [

  "/MTS211/DOC-20240318-WA0152",
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
  const downloadButton3 = document.getElementById("downloadButton3");
  downloadButton3.addEventListener("click", downloadFiles3);
  