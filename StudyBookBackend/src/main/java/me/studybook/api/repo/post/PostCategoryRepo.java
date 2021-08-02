package me.studybook.api.repo.post;

import me.studybook.api.domain.PostCategory;

public interface PostCategoryRepo {
    void create(PostCategory postCategory) throws Exception;

}
