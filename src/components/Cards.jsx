import PostService from 'ajax/PostService'
import useFetching from 'hooks/useFetching';
import React, { useEffect, useState } from 'react'

export default function Cards() {
  //get posts
  let [posts, setPosts] = useState(null);

  let [isFetchLoading, fetchPosts] = useFetching(async (id) => {
    let response = await PostService.getAll()
    setPosts(response.data.slice(0,10));
  });

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
    {isFetchLoading
      ? <h1>loading</h1>
      : <div>
        {posts.map(post => 
            <Card key={post.id} postId={post.id} post={post} />
        )}
      </div>
    }
    </>
  )
}

function Card({id, post}) {
    let [open, setOpen] = useState(false);

    function openPost() {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    return (
        <div>
            <h1>{post.title}</h1>
            {open &&
                <p>{post.body}</p>
            }
            <button onClick={openPost}>{open ? 'close': 'open'}</button>
        </div>
    )
}

