<!DOCTYPE html>
<html>
<head>
  <title>Contact Revamp</title>
  <?php include '../assets/include/head-items.php'; ?>
  <link type="text/css" rel="stylesheet" href="/assets/style/contact-page.css"/>
</head>
<body>

  <?php include '../assets/include/header.php'; ?>

  <!-- Email Script -->
  <?php
    if ($HTTP_GET_VARS['email'] != '' and $HTTP_GET_VARS['subject'] != '' and $HTTP_GET_VARS['organization'] != '' and $HTTP_GET_VARS['message'] != '')
      //if "email" is filled out, send email
      {
        //send email
        $email = $HTTP_GET_VARS['email'];
        $subject = $HTTP_GET_VARS['subject'];
        $message = $HTTP_GET_VARS['organization'] . '\n\n' . $HTTP_GET_VARS['message'];
        mail("joshua-smith@verizon.net", $subject, $message, "From:" . $email);
        echo "<br><div style=\"background: green; color: #fff; text-align: center; padding: 10px; font-weight: bold;\">Thank you for contacting Revamp.  We will respond as soon as possible.</div>";
    }
  ?>
  
  <form>
    <div class="box"> 
      <h1>Contact Us:</h1>
      <input type="text" name="organization" placeholder="Revamp" required />
      <input type="email" name="email" placeholder="revamp@revamp.co.nf" required />
      <input type="text" name="subject" placeholder="Service Inquiry" required />
      <textarea name="message" placeholder="I am contacting you because..." required ></textarea>
      <div class="buttons">
        <input type="submit" value="Contact" />
      </div>
    </div>
  </form>
    
  <?php include '../assets/include/footer.php'; ?>
  
</body>    
</html>