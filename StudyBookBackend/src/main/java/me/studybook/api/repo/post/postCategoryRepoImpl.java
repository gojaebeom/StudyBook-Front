package me.studybook.api.repo.post;

import lombok.AllArgsConstructor;
import me.studybook.api.domain.PostCategory;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@AllArgsConstructor
public class postCategoryRepoImpl implements PostCategoryRepo{

    private EntityManager entityManager;

    @Override
    public void create(PostCategory postCategory) throws Exception {
        entityManager.persist(postCategory);
    }
}
