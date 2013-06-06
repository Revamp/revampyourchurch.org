<!DOCTYPE>
<html>
<head>
  <title>Contact Revamp</title>
  <?php include '../assets/include/head-items.php'; ?>
  <link type="text/css" rel="stylesheet" href="/assets/style/contact-page.css"/>
</head>
<body>

  <?php include '../assets/include/header.php'; ?>
  
  <form>
    <div class="box"> 
      <h1>Contact Form:</h1>        
      <label>
        <span>Organization</span>
        <input type="text" class="input_text" name="organization" id="organization"/>
      </label>
      <label>
        <span>Email</span>
        <input type="text" class="input_text" name="email" id="email"/>
      </label>
      <label>
        <span>Subject</span>
        <input type="text" class="input_text" name="subject" id="subject"/>
      </label>
      <label>
        <span>Message</span>
        <textarea class="message" name="feedback" id="feedback"></textarea>
        <input type="button" class="button" value="Submit Form"/>
      </label>
    </div>
  </form>
  <div class="left">  </div>
  <div class="right"> </div>
  
  <?php include '../assets/include/footer.php'; ?>
  
</body>    
</html>