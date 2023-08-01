function openWinodwCenter(url, name, width, height){
  const left = (screen.availWidth - width) / 2;
  const top = (screen.availHeight - height) / 2;
  const option = `left=${left},top=${top}, width =${width}, height=${height}`

  open(url, name, option);

}

openWinodwCenter('../../hello.html','asd',300,200);