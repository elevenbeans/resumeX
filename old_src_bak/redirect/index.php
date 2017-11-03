 <?php 
$url = "http://elevenbeans.github.io/Resume/";  
if (!empty($url))    
{    
    //Header("Location: $url");  
    print_r(file_get_contents($url));
}    
?> 