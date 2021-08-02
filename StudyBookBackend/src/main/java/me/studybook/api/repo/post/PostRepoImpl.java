package me.studybook.api.repo.post;

import lombok.AllArgsConstructor;
import me.studybook.api.domain.Post;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@AllArgsConstructor
public class PostRepoImpl implements PostRepo{

    private EntityManager entityManager;

    @Override
    public List<Post> findPosts() throws Exception {
        return entityManager.createQuery("select p from Post p order by p.id desc").getResultList();
    }

    @Override
    public void create(Post post) throws Exception {
        entityManager.persist(post);
    }
}
