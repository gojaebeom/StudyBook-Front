package me.studybook.api.repo.post;

import me.studybook.api.domain.Post;

import java.util.List;

public interface PostRepo {
    List<Post> findPosts() throws Exception;
    void create(Post post) throws Exception;
}
