<!DOCTYPE html>
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
      <h1>Contact Us:</h1>
      <input type="text" name="organization" id="organization" placeholder="Revamp" required />
      <input type="email" name="email" id="email" placeholder="revamp@revamp.co.nf" required />
      <input type="text" name="subject" id="subject" placeholder="Service Inquiry" required />
      <textarea name="feedback" id="feedback" placeholder="I am contacting you because..." required ></textarea>
      <div class="buttons">
        <input type="submit" value="Contact" />
      </div>
    </div>
  </form>
    
  <?php include '../assets/include/footer.php'; ?>
  
</body>    
</html>