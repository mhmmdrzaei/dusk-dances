import VideoPlayer from "./VideoPlayer"

export default function MembersContent({ posts }) {
    return (
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post._id} className="border-b pb-6">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <div>
              {/* Simple rendering – you can use PortableText if you want full block support */}
              {post.content?.map((block, i) => {
                if (block._type === 'block') {
                  return <p key={i}>{block.children?.map((child) => child.text).join('')}</p>
                } else if (block._type === 'image') {
                  return (
                    <img
                      key={i}
                      src={block.asset?.url}
                      alt={block.alt || ''}
                      className="my-4 rounded"
                    />
                  )
                } else if (block._type === 'video') {
                  return (
                    <VideoPlayer link={block.url}/>
                  )
                }
                return null
              })}
            </div>
          </div>
        ))}
      </div>
    )
  }
  