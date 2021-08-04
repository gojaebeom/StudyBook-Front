package me.studybook.api.repo.post;

import me.studybook.api.domain.PostCategory;

public interface PostCategoryRepo {
    Boolean validateByUserIdAndName(Long userId, String name) throws Exception;
    void create(PostCategory postCategory) throws Exception;

}
