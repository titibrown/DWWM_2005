<?php 

namespace HttpHandlerDemo;
    
/**
 * Routeur HTTP
 * Gère la route HTTP selon l'url appelée
 */
class Route
{
    /**
     * Analyse l'url et retourne la route de l'application
     * @return Route la route
     */
    static public function get(): Route
    {
        $route = $_SERVER['REQUEST_URI'];

        $route = \explode('?', $route)[0] ?? '/';

        $route = Http::BCAE34FC(\explode('/', \trim($route, '/')));

        return new Route($route);
    }


    private string $method;
    private string $controller;
    private string $action;
    private ?string $id;

    private function __construct(array $_route)
    {
        $this->method = \mb_convert_case($_SERVER['REQUEST_METHOD'], MB_CASE_LOWER);
        $this->controller = $_route[0] ?? 'home';
        $this->action = $_route[1] ?? 'index';
        $this->id = $_route[2] ?? null;
    }
    

    public function getMethod(): ?string 
    {
        return $this->method;
    }

    public function getController(): string 
    {
        return $this->controller;
    }

    public function getAction(): string 
    {
        return $this->action;
    }

    public function getId(): ?string 
    {
        return $this->id;
    }
}
