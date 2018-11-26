import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {InfoService} from 'shared/services/info.service';
import 'rxjs/add/operator/take';

@Component({
    selector: 'app-info-form',
    templateUrl: './info-form.component.html',
    styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {
    infos = {
        title: null,
        comment: null,
        description: null,
        img: null
    };
    infolang;
    id;
    chooseALanguage = true;
    editMode = false;
    form: FormGroup;
    list = {
        'en': 'En',
        'uk': 'Uk',
        'ru': 'Ru',
        'pl': 'Pl'
    };

    constructor(private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private infoService: InfoService) {
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.infoService.get(this.id).take(1)
                .subscribe(inf => {
                    this.infos = inf;
                    // Object.keys(inf).forEach(() => {this.form.get('.img').setValue(inf.img); });
                    Object.keys(inf).forEach((value) => {
                        this.form.get(value + '.title').setValue(inf[value].title);
                        this.form.get(value + '.comment').setValue(inf[value].comment);
                        this.form.get(value + '.description').setValue(inf[value].description);
                        if (value === 'en') {this.form.get(value + '.img').setValue(inf[value].img); }
                    });
                });
        }
    }

    save(infos) {
        if (this.id) this.infoService.update(this.id, infos);
        else this.infoService.create(infos);

        this.router.navigate(['/school']);
    }

    delete() {
        if (!confirm('Are you sure you want to delete this task?')) return;
        this.infoService.delete(this.id);
        this.router.navigate(['/school']);
    }

    getKeys(controls) {
        return Object.keys(controls);
    }

    getList() {
        return Object.keys(this.list);
    }

    onClick(key: string) {
        this.infolang = key;
        this.chooseALanguage = false;
    }

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        const infoTitle = '';
        let infoTitl;
        const infoComment = '';
        const infoDescription = '';
        const infoImgUrl = '';
        const inf = this.infoService.get(this.id);

        if (inf) {
            infoTitl = this.infoService.getAll();
            // infoComment = inf[this.infolang].comment;
            // infoDescription = inf[this.infolang].description;
            // console.log(inf);
        }

        this.form = this.fb.group({
            // 'img': this.fb.control(infoImgUrl),
            en: this.fb.group({
                'title': this.fb.control(infoTitle),
                'comment': this.fb.control(infoComment),
                'description': this.fb.control(infoDescription),
                'img': this.fb.control(infoImgUrl),
            }),
            uk: this.fb.group({
                'title': this.fb.control(infoTitle),
                'comment': this.fb.control(infoComment),
                'description': this.fb.control(infoDescription),
            }),
            ru: this.fb.group({
                'title': this.fb.control(infoTitle),
                'comment': this.fb.control(infoComment),
                'description': this.fb.control(infoDescription),
            }),
            pl: this.fb.group({
                'title': this.fb.control(infoTitle),
                'comment': this.fb.control(infoComment),
                'description': this.fb.control(infoDescription),
            })
        });
    }
}
