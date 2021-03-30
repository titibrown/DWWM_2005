export default class BakeryMath
{
    static getRandomInt(min, max) 
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static getRandomFloat(min, max) 
    {
        return Math.round(Math.random(min, max) * 100) / 100;
    }

    static getRoundedFloat(val)
    {
        return Math.round(val * 100) / 100;
    }

    static getCurrentTime()
    {
        return new Date().getTime();
    }

    static getExpireTime(val)
    {
        return val * 1000 + new Date().getTime();
    }

    static getTimeLeft(val)
    {
        let timeleft = (val  - new Date().getTime()) / 1000;
        return (timeleft > 0) ? parseInt(timeleft) : 0;
    }
}