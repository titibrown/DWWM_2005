/**
 * JAVASCRIPT: Exercices
 * 
 * Les différents types de Point de la partie précédente peuvent tous être placés dans une "Area".
 * Une Area doit systèmatiquement être remplie complètement avec ces différents types de Point.
 * Par exemple, une zone 16*16 doit contenir 256 instances de Point, Point d'origine inclus.
 * 
 * Une nouvelle classe utilitaire est à développer ici.
 * L'objectif de cette classe est d'instancier une Area et de la remplir d'instances d'enfants de  "Point"
 * 
 * Ce remplissage doit toutefois respecter certaines conditions :
 * - Aucun Point à l'extérieur de la zone
 * - Le Point d'origine ne peut pas être une instance de "Goal"
 * - La zone contient au minimum 1 et au maximum 3 instance(s) de "Goal"
 * - Toutes les instances de "Goal" sont obligatoirement au "bord" de la zone.
 * - Les instances de Goal ne peuvent pas être "côte à côte"
 *  
 * 
 * 
 * Travail à réaliser
 * 
 * Créer un nouveau projet.
 * Dans ce projet, créer un répertoire "models". La classe Point ci-dessous ainsi que les classes à implémenter sont à placer dans ce répertoire.
 * La classe Point est réécrite en respectant le principe d'encapsulation (attributs privés + accesseurs pour x et y)
 * En utilisant l'héritage, implémenter les classes "Wall", "Door", "Path" et "Goal" décrites ci-dessus.
 * Toutes ces classes héritent de Point (directement ou indirectement).
 */