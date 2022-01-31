import styles from '../styles/Home.module.css'
import { HeadmsgCard } from './HeadMsgCard.jsx';
import ReactPlayer from 'react-player';
import { render } from 'react-dom';
export default function HeadMsgCard(props)
{
    
  const {headMsgContent,headMsgVideoUrl, ...rest} = props;


    return(

        <div {...rest}>
        
        <div className="flex justify-between  border border-grey-300 bg-white  w-full  mt-4 mb-4">
          <ReactPlayer 
          url={headMsgVideoUrl}
          className='react-player fixed-bottom'
          width='100%'
          height='100%'
          controls = {true}
          
          
          
          />
          
          <div className="p-4  text-gray-400 w-4/5">
                            
            <p className="pt-2 font-light text-gray-600">{headMsgContent}
            
            </p>
            
          </div>
        </div>
        </div>   

    )


}


