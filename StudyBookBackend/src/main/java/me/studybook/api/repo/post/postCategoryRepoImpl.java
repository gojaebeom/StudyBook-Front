package me.studybook.api.repo.post;

import lombok.AllArgsConstructor;
import me.studybook.api.domain.PostCategory;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@AllArgsConstructor
public class postCategoryRepoImpl implements PostCategoryRepo{

    private EntityManager entityManager;

    @Override
    public Boolean validateByUserIdAndName(Long userId, String name) throws Exception {
        List<PostCategory> categories = entityManager.createQuery(
                "select pc from  PostCategory pc " +
                        "where pc.user.id=:userId and pc.name=:name"
        )
        .setParameter("userId",userId)
        .setParameter("name", name)
        .getResultList();
        if(categories.isEmpty()) return true;
        return false;
    }

    @Override
    public void create(PostCategory postCategory) throws Exception {
        entityManager.persist(postCategory);
    }
}
