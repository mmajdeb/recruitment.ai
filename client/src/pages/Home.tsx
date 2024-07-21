import React, { useState } from "react";
import {
  Container,
  Box,
  CircularProgress,
  Alert,
  Typography,
  Button,
} from "@mui/material";
import usePosts from "../hooks/usePost";
import { Post } from "../types/Post";
import PostCard from "../components/post/PostCard";

const Home: React.FC = () => {
  const { posts, loading, error } = usePosts();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleApply = (post: Post) => {
    console.log("Applying on:", post);
  };

  const handleSave = (post: Post) => {
    console.log("Saved post:", post);
    // Implement save logic
  };

  const handleClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleCloseDetails = () => {
    setSelectedPost(null);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Container>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {!selectedPost ? (
          <Box
            sx={{
              width: "100%",
              overflowY: "auto",
              padding: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Post List
            </Typography>
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onSave={handleSave}
                onApply={handleApply}
                onClick={handleClick}
                isSelected={false} // Not needed for this view
                isHighlighted={false} // No post is highlighted in this view
                isListView={false} // Pass true to show description and keywords in list view
              />
            ))}
          </Box>
        ) : (
          <>
            <Box
              sx={{
                flex: 1,
                width: "30%",
                overflowY: "auto",
                borderRight: "1px solid #ccc",
                padding: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Post List
              </Typography>
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onSave={handleSave}
                  onApply={handleApply}
                  onClick={handleClick}
                  isSelected={false} // Not needed for this view
                  isHighlighted={selectedPost.id === post.id} // Highlight the selected post
                  isListView={true} // Pass true to show description and keywords in list view
                />
              ))}
            </Box>

            <Box
              sx={{
                flex: 2,
                width: "70%",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 2,
                }}
              >
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  Post Details
                </Typography>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleCloseDetails}
                >
                  Close
                </Button>
              </Box>
              <PostCard
                post={selectedPost}
                onSave={handleSave}
                onApply={handleApply}
                onClick={handleClick}
                isSelected={true} // This indicates that this is the currently selected post
                isHighlighted={false} // Highlighting is not needed in detail view
                isListView={false} // Pass false to show full details in detailed view
              />
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Home;
