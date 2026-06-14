$(document).ready( function(){

    /********************************
    *           Customizer          *
    ********************************/
    var body = $('body'),
    default_bg_color = $('.app-sidebar').attr('data-background-color'),
    default_bg_image = $('.app-sidebar').attr('data-image'),
    default_image_display = $('.app-sidebar').attr('data-display'),
    default_menu_compact = $('.app-sidebar').attr('data-compact');

    $('.cz-bg-color span[data-bg-color="'+default_bg_color+'"]').addClass('selected');
    $('.cz-bg-image img[src$="'+default_bg_image+'"]').addClass('selected');
    $('.sidebar-background').css('display',default_image_display);
    $('.cz-bg-image-display').prop('checked',default_image_display=='block');
    $('.nav-toggle').find('.toggle-icon').attr('data-toggle', default_menu_compact=='true'?'collapsed':'expanded');
    $('.cz-compact-menu').prop('checked',default_menu_compact=='true');

    // Customizer toggle & close button click events  [Remove customizer code from production]
    $('.customizer-toggle').on('click',function(){
        $('.customizer').toggleClass('open');
    });
    $('.customizer-close').on('click',function(){
        $('.customizer').removeClass('open');
    });
    if($('.customizer-content').length > 0){
        $('.customizer-content').perfectScrollbar({
            theme:"dark"
        });
    }

    // Change Sidebar Background Color
    $('.cz-bg-color span').on('click',function(){
        var $this = $(this),
        bgColor = $this.attr('data-bg-color');

        $this.closest('.cz-bg-color').find('span.selected').removeClass('selected');
        $this.addClass('selected');

        $('.app-sidebar').attr('data-background-color', bgColor);
        if(bgColor == 'white'){
            $('.logo-img img').attr('src','assets/img/logo-dark.png');
        }
        else{
            if($('.logo-img img').attr('src') == 'assets/img/logo-dark.png'){
                $('.logo-img img').attr('src','assets/img/logo.png');
            }
        }

        localStorage.setItem('sisweb-menu-color', bgColor);
    });

    // Change Background Image
    $('.cz-bg-image img').on('click',function(){
        var $this = $(this),
        src = $this.attr('src');

        $('.sidebar-background').css('background-image', 'url(' + src + ')');
        $this.closest('.cz-bg-image').find('.selected').removeClass('selected');
        $this.addClass('selected');

        localStorage.setItem('sisweb-menu-image', src);
    });

    $('.cz-bg-image-display').on('click',function(){
        var $this = $(this);
        display = 'none';
        if($this.prop('checked') === true){
            display = 'block';
            $('.sidebar-background').css('display','block');
        }
        else{
            $('.sidebar-background').css('display','none');
        }

        localStorage.setItem('sisweb-menu-image-display', display);
    });

    $('.cz-compact-menu').on('click',function(){
        $('.nav-toggle').trigger('click');
        compact = 'false';
        if($(this).prop('checked') === true){
            compact = 'true';
            $('.app-sidebar').trigger('mouseleave');
        }

        localStorage.setItem('sisweb-menu-compact', compact);
    });

    $('.cz-sidebar-width').on('change',function(){
        var $this = $(this),
        width_val = this.value,
        wrapper = $('.wrapper');

        if(width_val === 'small'){
            $(wrapper).removeClass('sidebar-lg').addClass('sidebar-sm');
        }
        else if(width_val === 'large'){
            $(wrapper).removeClass('sidebar-sm').addClass('sidebar-lg');
        }
        else{
            $(wrapper).removeClass('sidebar-sm sidebar-lg');
        }

    });

});
