package me.studybook.api.repo.post;

import lombok.AllArgsConstructor;
import me.studybook.api.domain.Post;
import me.studybook.api.domain.PostTag;
import me.studybook.api.domain.Tag;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@AllArgsConstructor
public class PostTagRepoImpl implements PostTagRepo{

    private EntityManager entityManager;

    @Override
    public void create(List<PostTag> postTags) throws Exception {
        for(PostTag postTag: postTags) {
            entityManager.persist(postTag);
        }
    }
}
