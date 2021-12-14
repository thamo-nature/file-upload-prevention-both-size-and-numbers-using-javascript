                   
                          $(function() 
                            {

                                    var // Define maximum number of files.
                                        max_file_number = 5,
                                        // Define your form id or class or just tag.
                                        $form = $('form'), 
                                        // Define your upload field class or id or tag.
                                        $file_upload = $('#image', $form), 
                                        // Define your submit class or id or tag.
                                        $button = $('.submit', $form); 

                                    // Disable submit button on page ready.
                                    $button.prop('disabled', 'disabled');

                                    $file_upload.on('change', function () 
                                {

                                    var imageSizeArr = 0;
                                            var imageArr = document.getElementById('image');
                                            var imageCount = imageArr.files.length;
                                            var imageToBig = false;
                                            for (var i = 0; i < imageArr.files.length; i++){
                                                var imageSize = imageArr.files[i].size;
                                                var imageName = imageArr.files[i].name;
                                                if (imageSize > 2097152){
                                                    var imageSizeArr = 1;
                                                }
                                                if (imageSizeArr == 1){
                                                    //console.log(imageName+': file too big\n');
                                                    imageToBig = true;
                                                }
                                                else if (imageSizeArr == 0){
                                                    //console.log(imageName+': file ok\n');
                                                }
                                            }
                                            if(imageToBig)
                                               {
                                                //give an alert that at least one image is to big
                                                window.alert("One of your image size is big.");
                                                $(this).val('');
                                                $button.prop('disabled', 'disabled');
                                                
                                                }

                                    var number_of_images = $(this)[0].files.length;
                                    if (number_of_images > max_file_number) {
                                        alert(`You can upload maximum ${max_file_number} files.`);
                                        $(this).val('');
                                        $button.prop('disabled', 'disabled');
                                    }                                                                    
                                     
                                     else {
                                        $button.prop('disabled', false);
                                    }

                                });
                            });                     
