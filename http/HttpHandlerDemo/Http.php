<?php 

namespace HttpHandlerDemo;
    
/**
 * Gestionnaire HTTP
 * Emet les réponses HTTP
 */
class Http 
{
    
    /**
     * Analyser cette méthode (que fait-elle ?)
     */
    static public function secure(array $_data = []): array
    {
        return \array_map(function ($v) {
            if(!\preg_match("/^[A-Za-z0-9\s]*$/", $v)) {
                // raise error
            }
            return $v;
        }, $_data);
    }


    /**
     * Renvoie une réponse HTTP met fin au script
     * @param int $_code Le code HTTP à utiliser dans la réponse
     * @param mixed $_data Les données à inclure dans la réponse
     */
    static public function response(int $_code, mixed $_data): void
    {

    }

}
