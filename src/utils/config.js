class Config{
    static loginUrl="http://127.0.0.1:8000/api/gettoken/";
    static homeUrl="/home";


    static sidebarItem=[
        {
            "index": "0",
            "title": "Home",
            "url": "/home",
            "icons": "home"
        },
        {
            "index": "1",
            "title": "Company",
            "url": "/company",
            "icons": "business"
        },
    ]
}
export default Config;