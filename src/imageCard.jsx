import { useState } from 'react';

export function ImageCard({url, title, description, author, dateTime, GlobalCountLike, SetGlobalCountLike, GlobalCountDislike, SetGlobalCountDislike}) {
  const [Comment, setComment] = useState('');
  const [CommentList, setList] = useState([]);
  const [LocalCountLike, SetLocalCountLike] = useState(0);
  const [LocalCountDislike, SetLocalCountDislike] = useState(0);

  const addList = () => {
    console.log(Comment)
    if (Comment.trim() ==="") return;
    setList([...CommentList, Comment]);
    console.log([...CommentList, Comment]);
    setComment('');
  };

  return (
    <div className="card" style={{
        fontFamily:'system-ui, Avenir, Helvetica, Arial, sans-serif',
        // boxShadow:'2px 2px 10px rgba(0, 0, 0, 0.05)',
        borderRadius:"12px",
        padding:'16px',
        border:'1px solid #e2e2e2ff',
        textAlign:'center'
    }}>
        <img src={url} width={'100%'} alt={title} style={{
            borderRadius:'12px'
        }} />
        <h2 style={{margin:'12px auto'}}>{title}</h2>
        <p>{description}</p>
        <p style={{margin:'8px auto'}}><span style={{fontWeight:'bold'}}>Author:</span> {author}</p>
        <p style={{margin:'8px auto'}}><span style={{fontWeight:'bold'}}>Uploaded:</span> {dateTime}</p>

        <button
          style={{border:'none', padding:'12px 24px', borderRadius:'8px', margin:'8px 4px'}}
          onClick={()=>{SetGlobalCountLike(GlobalCountLike+1);SetLocalCountLike(LocalCountLike+1)}}>👍<b>{LocalCountLike}</b></button>

        <button style={{border:'none', padding:'12px 24px', borderRadius:'8px', margin:'4px'}}
          onClick={()=>{SetGlobalCountDislike(GlobalCountDislike+1);SetLocalCountDislike(LocalCountDislike+1)}}>👎<b>{LocalCountDislike}</b></button>

        <div style={{ display: "flex", gap: "8px", margin:'12px', justifyContent:'center'}}>
          <input
            placeholder="Add a comment"
            style={{ border:'1px solid #e2e2e2ff', padding: "8px", width:'80%'}}
            value={Comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            style={{border:'none', borderRadius:'8px', padding: "12px 24px" }}
            onClick={addList}>
            <b>Add</b>
          </button>
        </div>
        <ul style={{listStylePosition:'inside', padding:'0px'}}>
          {CommentList.map((item,index)=> (
            <li key={index}>{item}</li>
          ))}
        </ul>
    </div>
  );
}