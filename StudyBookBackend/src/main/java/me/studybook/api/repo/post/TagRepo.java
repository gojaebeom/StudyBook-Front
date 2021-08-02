package me.studybook.api.repo.post;

import me.studybook.api.domain.Tag;

import java.util.List;

public interface TagRepo {
    void create(List<Tag> tags) throws Exception;
}
