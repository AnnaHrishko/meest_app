const copyToClipboard = (id) => {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  };
  
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
  const copyIOS = (id) => {
    const text = document.getElementById(promocode_text_copy).innerHTML;
  
    if (!navigator.clipboard) {
      const textarea = document.createElement("textarea");
  
      textarea.value = text;
      textarea.style.fontSize = "20px";
      document.body.appendChild(textarea);
  
      const range = document.createRange();
      range.selectNodeContents(textarea);
  
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      textarea.setSelectionRange(0, 999999);
  
      document.execCommand("copy");
  
      document.body.removeChild(textarea);
    }
  
    navigator.clipboard.writeText(text);
  };
  
  const copyTextById = (id) => {
    if (isIOS) {
      return copyIOS(id);
    }
    copyToClipboard(id);
  };
  
  window.copyTextById = copyTextById
// });