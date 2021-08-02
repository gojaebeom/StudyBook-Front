package me.studybook.api.repo.post;

import me.studybook.api.domain.Post;
import me.studybook.api.domain.PostTag;
import me.studybook.api.domain.Tag;

import java.util.List;

public interface PostTagRepo {
    void create(List<PostTag> postTags) throws Exception;
}
