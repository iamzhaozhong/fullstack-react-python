export default function RenderPosts(props) {
	const { posts } = props;

	return (
		<div>
			{posts.map((post) => {
				return (
					<div>
						<h1>{post.title}</h1>
						<h2>{post.excerpt}</h2>
						<h3>{post.date}</h3>
						<p>{post.content}</p>
					</div>
				);
			})}
		</div>
	);
}
