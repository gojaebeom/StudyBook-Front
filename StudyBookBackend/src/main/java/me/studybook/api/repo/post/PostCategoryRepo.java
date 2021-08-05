package me.studybook.api.repo.post;

import me.studybook.api.domain.PostCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostCategoryRepo extends JpaRepository<PostCategory, Long> {
    Long countByUserIdAndName(Long userId, String name);
}

//public interface PostCategoryRepo {
//    Boolean validateByUserIdAndName(Long userId, String name) throws Exception;
//    void create(PostCategory postCategory) throws Exception;
//
//}
