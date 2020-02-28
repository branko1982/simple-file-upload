<?php


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once "constants.php";
function getServerGlobalVariable($name) {
    $result = "";
    if(isset($_SERVER[$name])) {
        $result = $_SERVER[$name];
    }
    return $result;
}


function HttpAutentificationRequest() {
    $username = getServerGlobalVariable("PHP_AUTH_USER");
    $password = getServerGlobalVariable("PHP_AUTH_PW");

    $message = "Enter username and password";
    // premmenným sa priradia Server variables...

    $valid_passwords = array("letmein" => "letmein");
    $valid_users = array_keys($valid_passwords);

    $validated = (in_array($username, $valid_users)) && ($password == $valid_passwords[$username]);

    if (!$validated) {
        header("WWW-Authenticate: Basic realm='" . $message . "'");
        header("HTTP/1.0 401 Unauthorized");
        die("access denied");
    }
}
HttpAutentificationRequest();

?>

<!DOCTYPE html>
<html lang="sk">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Just some shitty website</title>
        <link rel="stylesheet" type="text/css" href = "http://<?php echo WEBSITE_NAME; ?>/main.css">
        <script type = "text/javascript" src="http://<?php echo WEBSITE_NAME; ?>/jQuery.js"></script>
        <script type = "text/javascript" src = "http://<?php echo WEBSITE_NAME; ?>/common-scripts.js"></script>
        <script type = "text/javascript" src = "http://<?php echo WEBSITE_NAME; ?>/auto-resize.js"></script>
        <script type = "text/javascript" src = "http://<?php echo WEBSITE_NAME; ?>/upload.js"></script>

    </head>

<body>
    <script type = "text/javascript">
        $("body").on("contextmenu", function () {
            return false;
        });
    </script>
    <div id = "html_wrapper" style = "background-color: inherit;">
        <div id = "body_wrapper"?>
            <div style = "height: 40px;"></div>
            <div id="upload_div">
                <div id="select_file_div">
                    <div id='file_selection_info'> 
                        <p>Vyberte súbor, alebo ho sem presunte mišou. Pred nahratím môžete upraviť jeho názov, zvoliť k nemu heslo alebo k nemu pridať dalšie informácie.
                    </div>
                    <div id='custom-file-upload_container'>
                        <div>
                            <label class="custom-file-upload" id="choose_file">
                                vybrať súbor
                                <input id="choose_file_button" type="file" multiple="mutliple">
                            </label>
                        </div>
                        <input type = "button" id = "the-upload-button" value = "nahrať">
                        <input type = "button" id = "upload-more-files" value = "nahrať dalšie súbory">
                    </div>
                </div>
                <div id='selected_files_div' >
                </div>
            </div>
            <div style = "height: 40px;"></div>
        </div>
    </div>
</body>
</html>