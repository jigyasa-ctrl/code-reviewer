import {useCallback, useState} from 'react'
import CodeMirror from "@uiw/react-codemirror"
import Review from "./Review"
import { javascript } from '@codemirror/lang-javascript';
const Editor: React.FC = () => {
    const [review, setReview] = useState("# Review below")
    const [code, setCode] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const handleChange = (data:string) => {
        setCode(data)
    }
    const handlegenerate = useCallback(() =>{
        console.log(code,"code")
        setIsLoading(true)
        fetch('http://localhost:3000/api/v1/reviews', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({code})
        }).then(res => res.json())
        .then((data) => {
            setIsLoading(false)
            setReview(data.review)
        })

    }, [code])
    return (
        <>
        <div className='flex justify-space-between'>
        <div className="editor-layout">
           
           <CodeMirror value={code} 
           theme="dark"
           minWidth='40vw'
           maxWidth='40vw'
           style={{
            fontSize: "20px",
           }}
           minHeight='100vh'
           extensions={[javascript({ jsx: true })]} 
           onChange={handleChange} />
           <button
           onClick={() => handlegenerate()}
            className='absolute bottom-3 primary bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>
            Generate Review
           </button>
        </div>
        <Review review={review} loading={isLoading} />
        </div>
    </>
    );
}

export default Editor;
