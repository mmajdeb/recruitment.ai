import React, { useState } from "react";
import {
  Container,
  Box,
  CircularProgress,
  Alert,
  Button,
  Grid,
  Drawer,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Theme } from "@mui/material/styles";
import { styled } from "@mui/system";
import usePosts from "../hooks/usePost";
import { Post } from "../types/Post";
import PostCard from "../components/post/PostCard";

// Styled component for custom scrollbar
const ScrollableBox = styled(Box)(() => ({
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "8px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f1f1f1",
    borderRadius: "8px",
  },
  scrollbarWidth: "thin",
  scrollbarColor: "#888 #f1f1f1",
}));

const Home: React.FC = () => {
  const { posts, loading, error } = usePosts();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const handleApply = (post: Post) => {
    console.log("Applying on:", post);
  };

  const handleSave = (post: Post) => {
    console.log("Saved post:", post);
  };

  const handleClick = (post: Post, isButtonClick: boolean = false) => {
    setSelectedPost((prevPost) =>
      prevPost?.id === post.id && isButtonClick ? null : post
    );
    if (isSmallScreen) {
      setDrawerOpen(false);
    }
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

  const postList = (
    <>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onSave={handleSave}
          onApply={handleApply}
          onClick={handleClick}
          isSelected={selectedPost?.id === post.id}
          isHighlighted={selectedPost?.id === post.id}
          isListView={!!selectedPost}
        />
      ))}
    </>
  );

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ flex: 1, alignContent: "flex-start" }}
        >
          {isSmallScreen && selectedPost ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setDrawerOpen(true)}
                edge="start"
                sx={{ marginTop: "20px", marginLeft: "15px" }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                sx={{ width: 250 }}
              >
                <ScrollableBox sx={{ width: 250, padding: 2 }}>
                  {postList}
                </ScrollableBox>
              </Drawer>
            </>
          ) : (
            <Grid
              item
              xs={12}
              md={selectedPost ? 4 : 12}
              component={ScrollableBox}
              sx={{ padding: 2 }}
            >
              {postList}
            </Grid>
          )}

          {selectedPost && (
            <Grid
              item
              xs={12}
              md={8}
              sx={{
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
                  justifyContent: "flex-end",
                  marginTop: isSmallScreen ? "-50px" : "10px",
                }}
              >
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
                isSelected={true}
                isHighlighted={false}
                isListView={false}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
