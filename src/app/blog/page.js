import Link from 'next/link';
import React from 'react';

const BlogPage = () => {
  return (
    <div>
      BlogPage{" "}
      <Link href={`/blog/${122}`}>
        <button className="btn btn-primary">blog details</button>
      </Link>
    </div>
  );
};

export default BlogPage;