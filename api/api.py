import uuid, urllib
from flask import Flask, request
from svcardgenerator.cardgen import cardgen

app = Flask(__name__)

@app.route('/api/generate', methods=['POST'])
def generate():
    card_details = request.form.to_dict()
    card_files = request.files.to_dict()

    if 'background_img' in card_details:
        # no bg
        if card_details['background_img'] in ['null', 'undefined']:
            del card_details['background_img']
        else:
            # user uploaded bg as a dataURL, read it as a file obj
            if card_details['background_img'].startswith(('data:image/jpeg;base64', 'data:image/png;base64')):
                response = urllib.request.urlopen(card_details['background_img'])
                card_details['background_img'] = response.file
            else:
                # selected bg from list
                bg_dir = '../public/templates/backgrounds/'
                card_details['background_img'] = bg_dir + card_details['background_img']

    if('base_img' in card_details and card_details['base_img'] in ['null', 'undefined']):
        del card_details['base_img']
    else:
        if 'base_img' in card_files:
            card_details['base_img'] = card_files['base_img']

    keys_with_numeric_values = ['char_type', 'clan', 'rarity', 'cost', 'atk', 'life', 'evo_atk', 'evo_life']

    for k in keys_with_numeric_values:
        card_details[k] = int(card_details[k])

    base_dir = '../dist/'
    filename = 'cards/' + str(uuid.uuid4().hex) + '.png'

    cardgen(card_details, base_dir + filename)

    return {'card_url': filename}