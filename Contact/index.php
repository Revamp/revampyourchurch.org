<!DOCTYPE html>
<html>
<head>
  <title>Contact Revamp</title>
  <?php include '../assets/include/head-items.php'; ?>
  <link type="text/css" rel="stylesheet" href="/assets/style/contact-page.css"/>
  <script type="text/javascript" src="../assets/scripts/contact.js" defer></script>
  <script type="text/javascript" src="../assets/scripts/mandrill.js"></script>
  <script type="text/javascript" src="../assets/scripts/mandrill.min.js"></script>
  <script type="text/javascript" src="../assets/scripts/json2.js"></script>
</head>
<body>

  <?php include '../assets/include/header.php'; ?>
  
  <br><div id="msg-not-functional" class="msg shown" style="background: #CA0000;">
    This page is not currently functional.  To contact Revamp, please email me at joshua-smith[at]verizon.net.  Thanks and sorry for the inconvenience.
  </div>
  
  <div id="msg-success" class="msg" style="background: green;">
    Thank you for contacting Revamp.  We will respond as soon as possible.
  </div>
  
  <form onSubmit="contactUs()" action="#">
    <div class="box"> 
      <h1>Contact Us:</h1>
      <input type="text" name="organization" placeholder="Revamp" id="org" required />
      <input type="email" name="email" placeholder="revamp@revamp.co.nf" id="email" required />
      <input type="text" name="subject" placeholder="Service Inquiry" id="sub" required />
      <textarea name="message" placeholder="I am contacting you because..." id="msg" required ></textarea>
      <div class="buttons">
        <button type="submit">Contact</button>
      </div>
    </div>
  </form>
    
  <?php include '../assets/include/footer.php'; ?>
  
</body>    
</html>