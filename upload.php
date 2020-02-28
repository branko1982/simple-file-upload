<?php
require_once("constants.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_FILES['file']['name'])) {
        if (count($_FILES) === 1) {
            if (is_uploaded_file($_FILES["file"]["tmp_name"])) {
                $newFilePath = $_SERVER["DOCUMENT_ROOT"] . "/uploaded_files/" . $_FILES["file"]["name"];
                if(!file_exists($newFilePath)) {
                    if (move_uploaded_file($_FILES["file"]["tmp_name"], $newFilePath)) {
                        echo "success";
                    } else {
                        echo "fail";
                        echo $newFilePath;
                    }
                } else {
                    echo "súbor na disku už existuje. Zvoľte iný názov";
                }
            }
        } else {
            echo "\$_FILES nemôžu obsahovať viacej ako 1 prvok";
        }
    }
}

?>