  $(document).ready(function () {
         // set the attribute and value



        $('li.dropdown').click(function () {
            $('li.dropdown').not(this).find('ul').hide();
            $(this).find('ul').toggle();
        });


  

    });


   

    