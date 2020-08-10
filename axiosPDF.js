axios.get("Paste your URL",
  {
    headers: {
      "Content-Type": "application/pdf",
      "token":('AccessToken')
    },
    
    responseType: 'blob'
  },
)
  .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', name+'.pdf');
      document.body.appendChild(link);
      link.click();
  })