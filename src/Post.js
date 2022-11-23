import "./Post.css"
import { Avatar } from "@mui/material";
import InputOptions from "./InputOptions";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useState } from "react";

export default function Post({name,description,message}){
    
    return(
        <div className="post">
            <div className="post_header">
                <Avatar />
                <div className="header_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                
            </div>
            <div className="post__body">
                    <p>{message}</p>
            </div>
            <div className="post_buttons">
                <InputOptions Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray'/>

                <InputOptions Icon={ChatOutlinedIcon} title='Message' color='gray'/>

                <InputOptions Icon={ShareOutlinedIcon} title='Share' color='gray'/>

                <InputOptions Icon={SendOutlinedIcon} title='Send' color='gray'/>
            </div>
        </div>
    )
}