<?php
$pageTitle = 'AutoSphere | Seller Registration';
$bodyClass = 'site-canvas site-page-shell';
$basePath = '..';
$currentPage = 'register.php';

require_once __DIR__ . '/../includes/db.php';

$message = '';
$isSuccess = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $address = trim($_POST['address'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if (
        $name === '' ||
        $address === '' ||
        $phone === '' ||
        $email === '' ||
        $username === '' ||
        $password === ''
    ) {
        $message = 'Please complete all required fields.';
    } elseif (!preg_match('/^[A-Za-z ]+$/', $name)) {
        $message = 'Name can only contain letters and spaces.';
    } elseif (!preg_match('/^[A-Za-z0-9 ]+$/', $address)) {
        $message = 'Address can only contain letters, numbers and spaces.';
    } elseif (!preg_match('/^1[3-9]\d{9}$/', $phone)) {
        $message = 'Please enter a valid China phone number.';
    } elseif (!preg_match('/^[^@]+@[^@]+\.(com|cn)$/', $email)) {
        $message = 'Email must contain one @ and end with .com or .cn.';
    } elseif (!preg_match('/^[A-Za-z0-9]{6,}$/', $username)) {
        $message = 'Username must be at least 6 letters or numbers.';
    } elseif (!preg_match('/^[A-Za-z0-9]{6,}$/', $password)) {
        $message = 'Password must be at least 6 letters or numbers.';
    } else {
    // Check whether the email has already been registered
    $checkSql = "SELECT email, phone, username 
             FROM sellers 
             WHERE email = ? OR phone = ? OR username = ? 
             LIMIT 1";

$checkStmt = mysqli_prepare($conn, $checkSql);

if ($checkStmt) {
    mysqli_stmt_bind_param($checkStmt, "sss", $email, $phone, $username);
    mysqli_stmt_execute($checkStmt);

    $checkResult = mysqli_stmt_get_result($checkStmt);
    $existingSeller = mysqli_fetch_assoc($checkResult);

    if ($existingSeller) {
        if ($existingSeller['email'] === $email) {
            $message = 'This email has already been registered.';
        } elseif ($existingSeller['phone'] === $phone) {
            $message = 'This phone number has already been registered.';
        } elseif ($existingSeller['username'] === $username) {
            $message = 'This username has already been registered.';
        }
    }

    mysqli_stmt_close($checkStmt);
} else {
    $message = 'Database query failed.';
}

    if ($message === '') {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO sellers (name, address, phone, email, username, password)
                VALUES (?, ?, ?, ?, ?, ?)";

        $stmt = mysqli_prepare($conn, $sql);

        if ($stmt) {
            mysqli_stmt_bind_param(
                $stmt,
                "ssssss",
                $name,
                $address,
                $phone,
                $email,
                $username,
                $hashedPassword
            );

            if (mysqli_stmt_execute($stmt)) {
                $message = 'Registration successful!';
                $isSuccess = true;
            } else {
                $message = 'Registration failed. Please try again.';
            }

            mysqli_stmt_close($stmt);
        } else {
            $message = 'Database query failed.';
        }
    }
}

    }


require_once __DIR__ . '/../includes/header.php';
?>

  <main class="member-page">
  <section class="shell-container member-page__panel shell-card register-panel">
    <div class="register-intro">
      <h1>Seller<br>Registration</h1>
      <p>This page keeps the shared AutoSphere shell ready for the seller registration workflow.</p>
    </div>

    <form class="register-form" id="regForm" method="POST" action="register.php" onsubmit="return validateForm()">
      <div class="register-field">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Only letters & space">
      </div>

      <div class="register-field">
        <label for="address">Address</label>
        <input type="text" id="address" name="address" placeholder="Letters, numbers & space">
      </div>

      <div class="register-field">
        <label for="phone">Phone</label>
        <input type="text" id="phone" name="phone" placeholder="China phone number">
      </div>

      <div class="register-field">
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="xxx@xx.com / xxx@xx.cn">
      </div>

      <div class="register-field">
        <label for="user">Username</label>
        <input type="text" id="user" name="username" placeholder="Min 6 letters/numbers">
      </div>

      <div class="register-field">
        <label for="pwd">Password</label>
        <input type="password" id="pwd" name="password" placeholder="Min 6 letters/numbers">
      </div>

      <p class="form-message <?php echo $isSuccess ? 'is-success' : ''; ?>">
        <?php echo htmlspecialchars($message); ?>
      </p>

      <div class="register-actions">
        <button type="submit" class="button button-primary effect-glare effect-electric">
          Register
        </button>
      </div>
    </form>
  </section>
</main>

<script>
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let address = document.getElementById("address").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  let user = document.getElementById("user").value.trim();
  let pwd = document.getElementById("pwd").value.trim();

  let regName = /^[A-Za-z ]+$/;
  if (!regName.test(name)) {
    alert("Name can only contain letters and space");
    return false;
  }

  let regAddr = /^[A-Za-z0-9 ]+$/;
  if (!regAddr.test(address)) {
    alert("Address can only contain letters, numbers and space");
    return false;
  }

  let regPhone = /^1[3-9]\d{9}$/;
  if (!regPhone.test(phone)) {
    alert("Please enter valid China phone number");
    return false;
  }

  let regEmail = /^[^@]+@[^@]+\.(com|cn)$/;
  if (!regEmail.test(email)) {
    alert("Email must have one @ and end with .com or .cn");
    return false;
  }

  let regUser = /^[A-Za-z0-9]{6,}$/;
  if (!regUser.test(user)) {
    alert("Username must be at least 6 letters/numbers");
    return false;
  }

  let regPwd = /^[A-Za-z0-9]{6,}$/;
  if (!regPwd.test(pwd)) {
    alert("Password must be at least 6 letters/numbers");
    return false;
  }

  return true;
}
</script>

<?php
require_once __DIR__ . '/../includes/footer.php';
?>
