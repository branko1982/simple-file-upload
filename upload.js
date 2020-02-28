function FormatBytes(size)
{
    if (size < 1024)
    {
        size = size.toFixed(2) + " B";
    }
    else if (size > 1024 && size < 1048576)
    {
        size = (size / 1024).toFixed(2) + " KB";
    }
    else if (size > 1048576 && size < 1073741824)
    {
        size = (size / 1048576).toFixed(2) + " MB";
    }
    else if (size > 1073741824)
    {
        size = (size / 1073741824).toFixed(2) + " GB";
    }
    return size;
}
function FormatFileDate(filedate)
{
    // var date = (((((filedate) / 1000) / 60) / 24) / 356);
    var date = new Date(filedate);
    var to_be_returned = date + filedate;
    return to_be_returned;

}
function FormatFName(filename)
{
    // nvm ako to funguje, ale funguje to.. a to je hlavné :D
    return filename.substr(0, filename.lastIndexOf('.'));
}
function DisplayNewFileEntry(x, number, extension, file)
{
    var extension1;
    switch (extension)
    {
        case 'mp4':
            extension1 = "/public/images/file-icons/mp4.png";
            break;

        case 'mp3':
            extension1 = "/public/images/file-icons/mp3.png";
            break;

        case 'php':
            extension1 = "/public/images/file-icons/php.png";
            break;

        case 'iso':
            extension1 = "/public/images/file-icons/iso.png";
            break;

        case 'png':
            var reader = new FileReader();
            reader.onload = function (event)
            {
                $("body").find("#upload-file-image-preview" + number + "").css("background-size", "70% 90%");
                $("body").find("#upload-file-image-preview" + number + "").css("background-image", "url(" + event.target.result + ")");
            }
            reader.readAsDataURL(file);
            break;

        case 'gif':
            var reader = new FileReader();
            reader.onload = function (event)
            {
                $("body").find("#upload-file-image-preview" + number + "").css("background-size", "70% 90%");
                $("body").find("#upload-file-image-preview" + number + "").css("background-image", "url(" + event.target.result + ")");
            }
            reader.readAsDataURL(file);
            break;
        case 'jpg':
            var reader = new FileReader();
            reader.onload = function (event)
            {
                $("body").find("#upload-file-image-preview" + number + "").css("background-size", "70% 90%");
                $("body").find("#upload-file-image-preview" + number + "").css("background-image", "url(" + event.target.result + ")");
            }
            reader.readAsDataURL(file);
            break;
        case 'jpeg':
            var reader = new FileReader();
            reader.onload = function (event)
            {
                $("body").find("#upload-file-image-preview" + number + "").css("background-size", "70% 90%");
                $("body").find("#upload-file-image-preview" + number + "").css("background-image", "url(" + event.target.result + ")");
            }
            reader.readAsDataURL(file);
            break;
        case 'xml':
            extension1 = "/public/images/file-icons/xml.png";
            break;

        case 'zip':
            extension1 = "/public/images/file-icons/zip.png";
            break;

        case 'rar':
            extension1 = "/public/images/file-icons/rar.png";
            break;

        case 'mpg':
            extension1 = "/public/images/file-icons/mpg.png";
            break;

        case 'pdf':
            extension1 = "/public/images/file-icons/pdf.png";
            break;

        case 'txt':
            extension1 = "/public/images/file-icons/txt.png";
            break;

        case 'exe':
            extension1 = "/public/images/file-icons/exe.png";
            break;

        case 'sql':
            extension1 = "/public/images/file-icons/sql.png";
            break;

        case 'app':
            extension1 = "/public/images/file-icons/app.png";
            break;
        case 'num':
            extension1 = "/public/images/file-icons/num.png";
            break;
        case 'flv':
            extension1 = "/public/images/file-icons/flv.png";
            break;

        case 'doc':
            extension1 = "/public/images/file-icons/doc.png";
            break;

        case 'css':
            extension1 = "/public/images/file-icons/css.png";
            break;

        case 'avi':
            extension1 = "/public/images/file-icons/avi.png";
            break;
        case 'php':
            extension1 = "/public/images/file-icons/php.png";
            break;

        default:
            extension1 = "/public/images/file-icons/unknown.png";
            break;
    }
    return "<div class='file-information' id='file-information" + number + "' data-another-id = '" + number + "'>\n\
<div class = 'upload-file-image-preview' id = 'upload-file-image-preview" + number + "' style = 'background-image: url(" + extension1 + ");'></div>\n\
<div class='file-information-value'><div style = 'top: 8px'>\n\
<div class = 'file-information-value-container'><p class = 'p_file_info'>názov súboru</p><input type='text'\n\
 id='file_name" + number + "' value='" + FormatFName(file.name) + "' class='small_input_box' maxlength='256'></div><div class = 'file-information-value-container'><p class = 'p_file_info'>typ súboru</p><input type = 'text' class = 'small_input_box' id = 'file_extension" + number + "' value = '" + extension + "' disabled = 'disabled'>\n\
</div><div class = 'file-information-value-container'><p class = 'p_file_info'>veľkosť súboru</p><p class = 'p_file_info' style = 'color: #2996D4;'>" + FormatBytes(file.size) + "</p>\n\
</div>\n\
<div class = 'file-information-value-container'>\n\
<p class = 'p_file_info'>heslo k súboru</p>\n\
<input type='password' name='file_password" + number + "' class='small_password_box' id='file_password" + number + "' maxlength='100'>\n\
</div>\n\
<div class = 'file-information-value-container'><p class = 'p_file_info'>ďalšie informácie</p>\n\
<p class = 'file-upload-add-info-p' id = 'file-upload-add-info-p" + number + "' data-another-id = '" + number + "'>prázdne<p/><input type = 'text' class = 'upload-file-info-val-container' id = 'upload-file-info-val-container" + number + "'>\n\
</div></div></div><div class='file-information-value-progress' id='file-information-value-progress" + number + "'>\n\
<div class='upload-useless-div'><div class = 'upload-status-container'><p class='upload-status-info-1'>stav </p><p class = 'upload-status-info-2' id = 'upload-status-info-2" + number + "'>čaká sa</p></div><div class = 'upload-status-info-another-container'><p class='size-progress-1'>nahratých</p><p class='size-progress-2' \n\
id='size-progress" + number + "'>0 / " + FormatBytes(file.size) + "</p></div><div class='progress_bar_container' id='progress_bar_container" + number + "'><div class='percentage-progress'>\n\
<p id='upload-percentage-value" + number + "' class='upload-percentage-value'></p></div><span class='bar_fill' id='bar_fill" + number + "'></span></div>\n\
</div></div></div>";
}
$(document).ready(function () {
    var WEBSITE_NAME = window.location.origin;
    $("body").on("click", function () {
        $(".upload-custom-context-menu").remove();
    });
    $("#upload_div").on('mouseleave', '.file-information', function (event) {
        event.stopPropagation();
        $(".upload-delete-file-div").hide();
    });
    $("#upload_div").on("click", ".upload-delete-file-div", function (event) {
        var id = $("body").find("#" + event.target.id + "").attr("data-another-id");
        FileCollection.splice(id, 1);
        if (FileCollection.length == 0)
        {
            $("#the-upload-button").hide();
        }
        $("#selected_files_div").empty();
        for (var x = 0; x < FileCollection.length; x++)
        {
            var file = FileCollection[x];
            var number = FileCollection.lastIndexOf(file);
            var extension = file.name.split('.').pop().toLowerCase();
            $("#selected_files_div").append(DisplayNewFileEntry(x, number, extension, file));
        }
    });
    $("body").on('keydown', '.textarea-new-file-info', function (event) {
        $(".upload-add-info-saved").hide();
        $(".fancy-blue-button").show();
    });
    var FileCollection = [];
    $("#choose_file_button").on('change', function () {
        var file_input = document.getElementById('choose_file_button');
        var files = file_input.files;
        if (FileCollection.length + files.length >= '8')
        {
            alert('Môžte nahrávať maximálne 7 súborov naraz');
        }
        else if (files.length == '0')
        {
            $("#the-upload-button").hide();
        }
        else
        {
            $("#the-upload-button").show();
            for (var x = 0; x < files.length; x++)
            {
                var file = files[x];
                FileCollection.push(file);
                var number = FileCollection.lastIndexOf(file);
                var extension = file.name.split('.').pop().toLowerCase();
                $("#selected_files_div").append(DisplayNewFileEntry(x, number, extension, file));
                $(".add-info-container").append("<div class = 'upload-textarea-container' id = 'upload-textarea-container" + number + "'><div class = 'add-file-info-head-div'>\n\
<div class = 'upload-file-info-close' id = '" + number + "'></div>\n\
<div class = 'upload-add-file-info-name-container'><p>doplnenie informácií k súboru:</p><p style = 'color: #448FE3;'> " + file.name + "</p></div>\n\
</div><div class = 'upload-add-file-info-body'><textarea placeholder = 'prázdne' class = 'textarea-new-file-info' id = 'textarea-new-file-info" + number + "' data-another-id = '" + number + "' maxlength = '3000'></textarea></div>\n\
<div class = 'upload-add-info-bottom'><div class = 'upload-add-info-bottom-child-div1'><div><p class = 'add-info-remaining-chars-p1'>počet zostávajúcich znakov: </p>\n\
<p class = 'add-info-remaining-chars-p2' id = 'add-info-remaining-chars-p" + number + "'>3000</p></div></div><div class = 'upload-add-info-bottom-child-div2'><p class = 'upload-add-info-saved'>uložené</p><input type = 'button' class = 'fancy-blue-button' id = '" + number + "' value = 'uložiť'></div></div>\n\
</div>");
                $(".red_button").show();
            }
        }
    });
    $("#upload_div").on('drop', function (event) {
        event.preventDefault();
        var files = event.originalEvent.dataTransfer.files;
        event.stopPropagation();
        $("#upload_div").css('box-shadow', '0px 4px 1px #c9c9c9');
        if (FileCollection.length + files.length >= '8')
        {
            alert('Môžte nahrávať maximálne 7 súborov naraz');
        }
        else
        {
            $("#the-upload-button").show();
            for (var x = 0; x < files.length; x++)
            {
                var file = files[x];
                FileCollection.push(file);
                var number = FileCollection.lastIndexOf(file);
                var extension = file.name.split('.').pop().toLowerCase();
                $("#selected_files_div").append(DisplayNewFileEntry(x, number, extension, file));
                $(".add-info-container").append("<div class = 'upload-textarea-container' id = 'upload-textarea-container" + number + "'><div class = 'add-file-info-head-div'>\n\
<div class = 'upload-file-info-close' id = '" + number + "'></div>\n\
<div class = 'upload-add-file-info-name-container'><p>doplnenie informácií k súboru:</p><p style = 'color: #448FE3;'> " + file.name + "</p></div>\n\
</div><div class = 'upload-add-file-info-body'><textarea placeholder = 'prázdne' class = 'textarea-new-file-info' id = 'textarea-new-file-info" + number + "' data-another-id = '" + number + "' maxlength = '3000'></textarea></div>\n\
<div class = 'upload-add-info-bottom'><div class = 'upload-add-info-bottom-child-div1'><div><p class = 'add-info-remaining-chars-p1'>počet zostávajúcich znakov: </p>\n\
<p class = 'add-info-remaining-chars-p2' id = 'add-info-remaining-chars-p" + number + "'>3000</p></div></div><div class = 'upload-add-info-bottom-child-div2'><p class = 'upload-add-info-saved'>uložené</p><input type = 'button' class = 'fancy-blue-button' id = '" + number + "' value = 'uložiť'></div></div>\n\
</div>");
                $(".red_button").show();
                if (FileCollection.length > 5)
                {
                    $("#upload_div").css('height', '800px');
                }

            }
        }
    });
    $("#upload_div").on('dragover', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $("#upload_div").css('box-shadow', '0px 4px 1px #EC2424');
    });
    $("#upload_div").on('dragleave', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $("#upload_div").css('box-shadow', '0px 4px 1px #c9c9c9');
    });
    $("#the-upload-button").on('click', function () {
        $(".progress_bar_container").show();
        $("#the-upload-button").hide();
        $("#choose_file").hide();
        $(".small_input_box").attr("disabled", "disabled");
        $(".small_password_box").attr("disabled", "disabled");
        $(".textarea-new-file-info").attr("disabled", "disabled");
        $(".upload-useless-div").css('display', 'block');
        $(".file-upload-add-info-p").attr("class", "file-upload-add-info-p-lel");
        FileCollection.forEach(function (ArrayElement) {
            var x = FileCollection.indexOf(ArrayElement);
            $("body").find("#upload-status-info-2" + x + "").text("súbor sa nahráva");
            var shitty_div = "#file-information-value-progress" + x;
            var formData = new FormData();
            var shitty_var = "#bar_fill" + x;
            var percentage_progress = "#upload-percentage-value" + x;
            var size_progress = "#size-progress" + x;
            formData.append('file_extension', $("#file_extension" + x + "").val());
            formData.append('file', FileCollection[x]);
            formData.append('file_name', $("#file_name" + x + "").val());
            formData.append('file_password', $("#file_password" + x + "").val());
            formData.append('file_info', $("#upload-file-info-val-container" + x + "").val());
            $.ajax({
                xhr: function ()
                {
                    var xhr = new window.XMLHttpRequest();
                    xhr.upload.addEventListener("progress", function (evt) {
                        if (evt.lengthComputable)
                        {
                            var percentComplete = (((evt.loaded / evt.total) * 100).toFixed(0));
                            $(shitty_var).css('width', percentComplete + '%');
                            $(percentage_progress).text(percentComplete + '%');
                            $(size_progress).text(" " + FormatBytes(evt.loaded) + "/" + FormatBytes(evt.total) + "");
                        }
                    }, false);
                    return xhr;
                },
                type: "post",
                url: "" + WEBSITE_NAME + "/upload.php",
                data: formData,
                contentType: false,
                processData: false,
                cache: false,
                success: function (data)
                {

                    if (data == "success")
                    {
                        $("body").find($("#progress_bar_container" + x + "")).hide();
                        $("body").find($("#upload-status-info-2" + x + "")).text("nahrávanie sa dokončilo")
                        $(shitty_div).append("<div style='top: 3px;'><p class='uploaded_success_p'>odkaz: </p><p class='file-upload-success-link-p'>odkaz na stiahnute nieje dostupný. </p><br><p class = 'upload_success_p'></div>");
                    }
                    $("#upload-more-files").show();
                }
            });
        });
    });
    $("body").on('click', '.file-upload-add-info-p', function (event) {
        var id = $("#upload_div").find("#" + event.target.id + "").attr("data-another-id");
        $("#textarea-new-file-info" + id + "").val($("#upload-file-info-val-container" + id + "").val());
        $(".my-files-background").show();
        $(".add-info-container").show();
        $("body").find("#upload-textarea-container" + id + "").show(400);
    });
    $("body").on("click", ".upload-file-info-close", function (event) {
        $("body").find("#upload-textarea-container" + event.target.id + "").hide(400);
        $(".add-info-container, .my-files-background, .upload-add-info-saved").hide();

    });
    $("body").on("click", ".fancy-blue-button", function (event) {
        var id = event.target.id;
        var textarea_info_value = $("#textarea-new-file-info" + id + "").val();
        $("#upload-file-info-val-container" + id + "").val(textarea_info_value);
        $(".fancy-blue-button").hide();
        $(".upload-add-info-saved").show();
        if ($("#upload-file-info-val-container" + id + "").val() !== "")
        {
            $("#file-upload-add-info-p" + id + "").css('color', '#05a3ff');
            $("#file-upload-add-info-p" + id + "").text("doplnené");
        }
        else
        {
            $("#file-upload-add-info-p" + id + "").css('color', 'rgb(134, 134, 134)');
            $("#file-upload-add-info-p" + id + "").text("prázdne");
        }
    });
    $("#upload-more-files").on('click', function () {
        $("#upload-more-files").hide();
        $("#choose_file").show();
        $("#selected_files_div").empty();
        FileCollection = [];
    });
    $("#upload_div").on('mouseenter', '.file-upload-add-info-p', function (event) {
        var id = $(this).attr("data-another-id");
        if ($("#upload-file-info-val-container" + id + "").val() !== "")
        {
            $(this).text("upraviť..");
            $(this).css('color', '#05a3ff');
        }
        else
        {
            $(this).text("pridať..");
            $(this).css('color', '#05a3ff');
        }
    });
    $("body").on("click", ".upload-custom-context-menu", function (event) {
        var element_id = ($(this).prop("id"));
        var id = $("body").find("#" + element_id + "").attr("file-identifier");
        FileCollection.splice(id, 1);
        if (FileCollection.length == 0)
        {
            $("#the-upload-button").hide();
        }
        $("#selected_files_div").empty();
        for (var x = 0; x < FileCollection.length; x++)
        {
            var file = FileCollection[x];
            var number = FileCollection.lastIndexOf(file);
            var extension = file.name.split('.').pop().toLowerCase();
            $("#selected_files_div").append(DisplayNewFileEntry(x, number, extension, file));
        }
        $(".upload-custom-context-menu").remove();
    });
    $("#upload_div").on('mouseleave', '.file-upload-add-info-p', function (event) {
        var id = $(this).attr("data-another-id");
        if ($("#upload-file-info-val-container" + id + "").val() !== "")
        {
            $(this).text("doplnené");
            $(this).css('color', '#05a3ff');
        }
        else
        {
            $(this).css('color', 'rgb(134, 134, 134)');
            $(this).text("prázdne");
        }
    });
    $("body").on("keydown", ".textarea-new-file-info", function () {
        var the_id = $(this).attr("data-another-id");
        var typed = $(this).val().length;
        var remaining_chars = 3000 - typed;
        $("body").find("#add-info-remaining-chars-p" + the_id + "").text("" + remaining_chars + "");
    });
    $("#selected_files_div").on("mouseover", ".file-information", function (event) {
        $(this).css("background-color", "#efefef");
    });
    $("#selected_files_div").on("mouseleave", ".file-information", function (event) {
        $(this).css("background-color", "#FAFAFA");
    });
    $("#selected_files_div").on("mousedown", ".file-information", function (event) {
        var id = $(this).prop("id");
        if (event.which == 3 || event.keyCode == 3)
        {
            $(".upload-custom-context-menu").remove();
            $("body").append("<div class = 'upload-custom-context-menu' id = 'upload-custom-context-menu" + id + "' file-identifier = '" + id + "'>odstrániť</div>");
            $("body").find($("#upload-custom-context-menu" + id + "")).css({top: event.pageY, left: event.pageX});
        }
    });
});
