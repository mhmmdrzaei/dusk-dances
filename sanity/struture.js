import { CogIcon, LemonIcon, HomeIcon, CaseIcon, ChartUpwardIcon} from '@sanity/icons';
import { structureTool } from 'sanity/structure';

export const myStructure = (S) => {
  return S.list()
    .title('Dusk Dances')
    .items([
      ...S.documentTypeListItems()
        .reverse()
        .filter((listItem) => {
          const id = listItem.getId();
          if (!id) return true;
          return !['page', 'siteSettings', 'events', 'member', "membersAreaPosts"].includes(id);
        }),

      // Pages
      S.listItem()
        .title('Pages')
        .icon(LemonIcon)
        .child(S.documentTypeList('page')),

      // Members
      S.listItem()
        .title('Members')
        .icon(CogIcon)
        .child(S.documentTypeList('member')),

      // Events
      S.listItem()
        .title('Events')
        .icon(CaseIcon)
        .child(S.documentTypeList('events')),
    // Members area Posts
      S.listItem()
        .title('Members Area Posts')
        .icon(ChartUpwardIcon)
        .child(S.documentTypeList('membersAreaPosts')),

      // Site Settings
      S.listItem()
        .title('Site Settings')
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
    ]);
};
