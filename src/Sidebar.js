import "./Sidebar.css"
export default function Sidebar(){
    const recentItem = (topic)=>{
        return(
        <div className="sidebar__recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
        )
    }
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="ruvim-noga-pazM9TQJ2Ck-unsplash.jpg" alt="image"/>
                <h2>Rohinish</h2>
                <h4>singhrohinish09@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                <h4>Who viewed you</h4>
                <p className="Sidebar__statNumber">2,543</p>
                </div>

                <div className="sidebar__stat">
                <h4>Views on post</h4>
                <p className="Sidebar__statNumber">2,448</p>
                </div>
                
            </div>
            <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem('reactjs')}
                    {recentItem('programming')}
                    {recentItem('softwareengineering')}
                    {recentItem('design')}
                    {recentItem('developer')}

                </div>
        </div>
    )
}