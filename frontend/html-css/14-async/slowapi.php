<?php 

// Décommenter la ligne suivante pour simuler une réponse lente.
sleep(5); // le script se met en pause 5 secondes.


// {"name": "Mike", "age": 40}.
exit(json_encode([
    'name' => 'Mike', 
    'age' => 40
]));
