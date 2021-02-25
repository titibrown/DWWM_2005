<?php 

// Décommenter la ligne suivante pour simuler une api lente.
//sleep(10); 


// {"name": "Mike", "age": 40}
exit(json_encode([
    'name' => 'Mike', 
    'age' => 40
]));
