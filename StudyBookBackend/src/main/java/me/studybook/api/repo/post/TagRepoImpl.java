package me.studybook.api.repo.post;

import lombok.AllArgsConstructor;
import me.studybook.api.domain.Tag;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@AllArgsConstructor
public class TagRepoImpl implements TagRepo{

    private EntityManager entityManager;

    @Override
    public void create(List<Tag> tags) throws Exception {
        for(Tag tag: tags){
            entityManager.persist(tag);
        }
    }
}
